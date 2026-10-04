import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PlayIcon, PlusIcon, SearchIcon } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { StatusAlert } from "@/components/form-field";
import { DataTablePagination } from "@/components/data-table-pagination";
import { PageHeader, PageShell, PageToolbar } from "@/components/page-shell";

import { ContentForm } from "./content-form";

import { channelService } from "src/services/channelService";
import { contentService } from "src/services/contentService";

import { RemoteThumbnail } from "src/components/remote-thumbnail";
import { useUploadManager } from "@/components/upload/upload-manager";

import { Channel, Content } from "@/types";

dayjs.extend(duration);

/** Sentinel for the "All" channel option; Base UI reserves null for "no selection". */
const ALL_CHANNELS = "all";

const TABS = [
  { value: "all", label: "All" },
  { value: "movies", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "miniseries", label: "Miniseries" },
  { value: "music", label: "Music" },
  { value: "animations", label: "Animations" },
  { value: "documentary", label: "Documentary" },
  { value: "original", label: "Original" },
];

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
      <Button variant="outline" size="sm" onClick={onPlay}>
        <PlayIcon />
        Play
      </Button>
    );
  }

  const isContainer =
    item.content_type === "series" || item.content_type === "miniseries";

  return (
    <Tooltip>
      {/* A disabled button emits no pointer events, so the span carries the tooltip. */}
      <TooltipTrigger render={<span tabIndex={0} className="inline-flex rounded-lg" />}>
        <Button variant="outline" size="sm" disabled>
          <PlayIcon />
          Play
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {isContainer
          ? "A series has no video of its own — open its episodes to play them"
          : "No video uploaded for this item yet"}
      </TooltipContent>
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
  const { subscribeToAttached } = useUploadManager();

  const [tab, setTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
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

  // A background upload writes its URL onto the record directly, so the row on
  // screen is stale the moment it finishes. Read the latest fetch through a ref
  // to keep the subscription itself from resubscribing on every render.
  const fetchContentRef = useRef(fetchContent);
  fetchContentRef.current = fetchContent;

  useEffect(
    () => subscribeToAttached(() => fetchContentRef.current()),
    [subscribeToAttached],
  );

  const handleOpen = (item: Content | null = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const handleTabChange = (newValue: string) => {
    setTab(newValue);
    setPage(0);
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

  const channelItems = [
    { value: ALL_CHANNELS, label: "All" },
    ...channels.map((channel) => ({ value: String(channel.id), label: channel.name })),
  ];

  const filteredRows = content
    .filter((item) => {
      if (tab === "all") return true;
      return item.content_type === (tab === "movies" ? "movie" : tab);
    })
    .filter((item) =>
      channelId ? String(item.channel) === channelId : true,
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  useEffect(() => {
    const lastPage = Math.max(0, Math.ceil(filteredRows.length / rowsPerPage) - 1);
    if (page > lastPage) setPage(lastPage);
  }, [filteredRows.length, page, rowsPerPage]);

  const rows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <PageShell>
      <PageHeader
        title="Content"
        description="Movies, series and other titles available to stream."
        actions={
          <Button onClick={() => handleOpen()}>
            <PlusIcon />
            Create Content
          </Button>
        }
      />
      <PageToolbar>
        <Select
          items={channelItems}
          value={channelId || ALL_CHANNELS}
          onValueChange={(newChannelId) => {
            setPage(0);
            const params = new URLSearchParams(searchParams);
            if (newChannelId && newChannelId !== ALL_CHANNELS) {
              params.set("channel", newChannelId);
            } else {
              params.delete("channel");
            }
            router.push(`${pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger aria-label="Channel" className="w-full sm:w-56">
            <span className="text-muted-foreground">Channel:</span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {channelItems.map((channel) => (
              <SelectItem key={channel.value} value={channel.value}>
                {channel.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative w-full sm:w-64">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="Search Content"
            placeholder="Search content..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
          />
        </div>
      </PageToolbar>

      <Tabs value={tab} onValueChange={(value) => handleTabChange(String(value))}>
        {/* Let the tabs scroll on narrow screens instead of the page. */}
        <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          <TabsList>
            {TABS.map((item) => (
              <TabsTrigger key={item.value} value={item.value} className="px-3">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-24 pl-4">Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Content Type</TableHead>
              <TableHead>Channel</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="pr-4 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No content found.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-4">
                    <RemoteThumbnail src={item.thumbnail} label={item.title} />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="capitalize">{item.content_type}</TableCell>
                  <TableCell>
                    {channels.find((c) => String(c.id) === String(item.channel))
                      ?.name || "—"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "rejected"
                          ? "destructive"
                          : item.status === "approved"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {item.status || "Unspecified"}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-4">
                    <div className="flex flex-wrap justify-end gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleOpen(item)}>
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
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                      {item.content_type === "series" && (
                        <Button
                          variant="outline"
                          size="sm"
                          nativeButton={false}
                          render={<Link href={`/content/${item.id}/seasons`} />}
                        >
                          Seasons
                        </Button>
                      )}
                      {item.content_type === "miniseries" && (
                        <Button
                          variant="outline"
                          size="sm"
                          nativeButton={false}
                          render={<Link href={`/content/${item.id}/miniseries-episodes`} />}
                        >
                          Episodes
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <DataTablePagination
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={setPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <ContentForm
        open={open}
        onClose={handleClose}
        item={editItem}
        channels={channels}
        onSave={handleSave}
      />
      <Dialog open={Boolean(playingContent)} onOpenChange={(next) => !next && handleClosePlayer()}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader className="pr-8">
            <DialogTitle>{playingContent?.title || "Video playback"}</DialogTitle>
          </DialogHeader>
          {playbackError && <StatusAlert>{playbackError}</StatusAlert>}
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
              className="max-h-[70vh] w-full rounded-lg bg-black"
            >
              Your browser does not support video playback.
            </video>
          ) : null}
          <DialogFooter>
            <Button variant="outline" onClick={handleClosePlayer}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
