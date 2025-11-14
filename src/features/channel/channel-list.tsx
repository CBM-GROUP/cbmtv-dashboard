import { CONFIG } from "src/config-global";

import { ChannelListView } from "src/features/channel/channel/view";

// ----------------------------------------------------------------------

export default function ChannelListPage() {
  return (
    <>
      <title>{`Channels - ${CONFIG.appName}`}</title>

      <ChannelListView />
    </>
  );
}
