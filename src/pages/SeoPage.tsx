import Service from "../components/Services";

import SeoSteps from "../components/SeoSteps";
function SeoPage() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-[#101112] to-black flex flex-col items-center px-2 py-10">
            {/* Header */}
            <SeoSteps />
            <Service />
            <div className="w-full max-w-3xl h-0.5 bg-gradient-to-r from-green-400/30 via-transparent to-green-400/30 mt-12" />
        </div>
    )
}

export default SeoPage
