import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import MuxPlayer from "@mux/mux-player-react";

import { ContentForm } from "./content-form";

import { channelService } from "src/services/channelService";
import { contentService } from "src/services/contentService";

import { RemoteThumbnail } from "src/components/remote-thumbnail";

import { Channel, Content } from "@/types";

dayjs.extend(duration);

function isPlayableUrl(value: string | null | undefined): value is string {
  // Empty/null is the common case for a row whose video has not been uploaded
  // yet -- check it explicitly rather than relying on new URL() throwing.
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * The Play action.
 *
 * Previously this was `{isPlayableUrl(...) && <Button/>}`, which removed the
 * button entirely for any row without a video. That is indistinguishable from
 * the feature being broken or undeployed, and it is the common case: content
 * rows are created before the video is uploaded. Render a disabled button with
 * the reason instead of silently omitting it.
 */
function PlayAction({ item, onPlay }: { item: Content; onPlay: () => void }) {
  if (isPlayableUrl(item.streaming_link)) {
    return (
      <Button size="small" onClick={onPlay}>
        Play
      </Button>
    );
  }

  const isContainer =
    item.content_type === "series" || item.content_type === "miniseries";

  return (
    <Tooltip
      title={
        isContainer
          ? "A series has no video of its own — open its episodes to play them"
          : "No video uploaded for this item yet"
      }
    >
      {/* MUI needs a wrapper: a disabled button emits no pointer events. */}
      <span>
        <Button size="small" disabled>
          Play
        </Button>
      </span>
    </Tooltip>
  );
}

export function ContentListView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const channelId = searchParams.get("channel");

  const [content, setContent] = useState<Content[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Content | null>(null);
  const [playingContent, setPlayingContent] = useState<Content | null>(null);
  const [playbackError, setPlaybackError] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [tab, setTab] = useState("movies");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchContent = async () => {
    try {
      const data = await contentService.getContent();
      setContent(data);
    } catch (error) {
      console.error("Failed to fetch content", error);
    }
  };

  const fetchChannels = async () => {
    try {
      const data = await channelService.getChannels();
      setChannels(data);
    } catch (error) {
      console.error("Failed to fetch channels", error);
    }
  };

  useEffect(() => {
    fetchContent();
    fetchChannels();
  }, [searchParams]);

  const handleOpen = (item: Content | null = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleDelete = async (id: string) => {
    try {
      await contentService.deleteContent(id);
      fetchContent();
    } catch (error) {
      console.error("Failed to delete content", error);
    }
  };

  const handleSave = () => {
    fetchContent();
  };

  const handleClosePlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("src");
      videoRef.current.load();
    }
    setPlayingContent(null);
    setPlaybackError("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <FormControl sx={{ minWidth: 240 }}>
            <InputLabel>Channel</InputLabel>
            <Select
              value={channelId || ""}
              onChange={(e) => {
                const newChannelId = e.target.value;
                const params = new URLSearchParams(searchParams);
                if (newChannelId) {
                  params.set("channel", newChannelId);
                } else {
                  params.delete("channel");
                }
                router.push(`${pathname}?${params.toString()}`);
              }}
            >
              <MenuItem value="">All</MenuItem>
              {channels.map((channel) => (
                <MenuItem key={channel.id} value={String(channel.id)}>
                  {channel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Search Content"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: 240 }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
        >
          Create Content
        </Button>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Movies" value="movies" />
          <Tab label="Series" value="series" />
          <Tab label="Miniseries" value="miniseries" />
          <Tab label="Music" value="music" />
          <Tab label="Animations" value="animations" />
          <Tab label="Documentary" value="documentary" />
          <Tab label="Original" value="original" />
        </Tabs>
      </Box>

      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content Type</TableCell>
              <TableCell>Channel</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content
              .filter((item) => {
                if (tab === "movies") return item.content_type === "movie";
                if (tab === "series") return item.content_type === "series";
                if (tab === "miniseries")
                  return item.content_type === "miniseries";
                if (tab === "music") return item.content_type === "music";
                return false;
              })
              .filter((item) =>
                channelId ? String(item.channel) === channelId : true,
              )
              .filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <RemoteThumbnail src={item.thumbnail} label={item.title} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.content_type}</TableCell>
                  <TableCell>
                    {channels.find((c) => String(c.id) === String(item.channel))
                      ?.name || "—"}
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      <Button size="small" onClick={() => handleOpen(item)}>
                        Edit
                      </Button>
                      <PlayAction
                        item={item}
                        onPlay={() => {
                          setPlaybackError("");
                          setPlayingContent(item);
                        }}
                      />
                      <Button
                        size="small"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                      {item.content_type === "series" && (
                        <Button
                          size="small"
                          component={Link}
                          href={`/content/${item.id}/seasons`}
                        >
                          Seasons
                        </Button>
                      )}
                      {item.content_type === "miniseries" && (
                        <Button
                          size="small"
                          component={Link}
                          href={`/content/${item.id}/miniseries-episodes`}
                        >
                          Episodes
                        </Button>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={content.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <ContentForm
        open={open}
        onClose={handleClose}
        item={editItem}
        channels={channels}
        onSave={handleSave}
      />
      <Dialog open={Boolean(playingContent)} onClose={handleClosePlayer} fullWidth maxWidth="md">
        <DialogTitle>{playingContent?.title || "Video playback"}</DialogTitle>
        <DialogContent>
          {playbackError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {playbackError}
            </Alert>
          )}
          {playingContent?.streaming_link?.includes("mux.com") ? (
            <MuxPlayer
              key={playingContent.streaming_link}
              playbackId={playingContent.streaming_link.split("/").pop()?.split(".")[0] || ""}
              style={{ width: "100%", aspectRatio: "16/9" }}
              onError={() => setPlaybackError("This video could not be played.")}
              autoPlay
            />
          ) : playingContent ? (
            <video
              ref={videoRef}
              key={playingContent.streaming_link}
              src={playingContent.streaming_link ?? undefined}
              controls
              autoPlay
              onError={() => setPlaybackError("This video could not be played.")}
              style={{ width: "100%", maxHeight: "70vh", backgroundColor: "black" }}
            >
              Your browser does not support video playback.
            </video>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePlayer}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
