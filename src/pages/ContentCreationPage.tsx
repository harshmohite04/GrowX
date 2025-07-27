import ContentCreationWorks from '../components/ContentCreationWorks'
import Service from '../components/Services'
function ContentCreationPage() {
  return (
    <div className="w-full min-h-fit bg-black flex flex-col items-center px-2 py-10">
      {/* Header */}
      <ContentCreationWorks/>
      <Service/>
    </div>
  )
}

export default ContentCreationPage
