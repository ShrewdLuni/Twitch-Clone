import { hostname } from "os";
import { UserAvatar } from "../user-avatar";
import { VerifiedMark } from "../verified-mark";
import { useParticipants, useRemoteParticipant } from "@livekit/components-react";
import { UserIcon } from "lucide-react";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  imageUrl: string;
  isFollowing: boolean;
  name: string;
}

export const Header = ({hostName,hostIdentity,viewerIdentity,imageUrl,isFollowing,name}: HeaderProps) => {
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length - 1;

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;


  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-4 items-start justify-between">
        <div className="flex items-center gap-x-3">
          <UserAvatar imageUrl={imageUrl} username={hostName} size="lg" isLive={true} showBadge/>
          <div className="space-y-1">
            <div className="flex items-center gap-x-2">
              <h2 className="text-sm font-semibold">
                {hostName}
              </h2>
              <VerifiedMark/>
            </div>
            <p className="text-sm font-semibold">
              {name}
            </p>
            {isLive 
            ? (
              <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
                <UserIcon className="h-4 w-4"/>
                <p>
                  {participantCount} {participantCount === 1 ? "viewer" : "viewers"}
                </p>
              </div>
            )
            : (
              <p className="font-semibold text-xs text-muted-foreground">
                Offline
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) 
}