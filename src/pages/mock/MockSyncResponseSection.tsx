import { SyncResponseSection } from "../../components"
import { useMock } from "../../lib/hooks"


export const MockSyncResponseSection = () => {
  const {syncResponse} = useMock()
  return (
    <SyncResponseSection syncResponse={syncResponse}/>
  )
}
