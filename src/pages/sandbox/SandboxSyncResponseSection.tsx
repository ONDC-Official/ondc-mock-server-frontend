import { SyncResponseSection } from "../../components"
import { useSandbox } from "../../lib/hooks"


export const SandboxSyncResponseSection = () => {
  const {syncResponse} = useSandbox()
  return (
    <SyncResponseSection syncResponse={syncResponse}/>
  )
}
