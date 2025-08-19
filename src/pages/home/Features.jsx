import { LayoutDashboard, MessageCircleMore, Shapes, ShieldCheck } from "lucide-react"

const Features = () => {
    return (
        <section className="sm:w-3/4 mx-auto grid sm:grid-cols-4 grid-cols-1 my-20 gap-2 ">

            <div className="text-white border-t border-neutral-700 p-4 rounded">
                <LayoutDashboard size={35} />
                <h1 className="font-semibold text-xl ">Balanced Service Approach</h1>
                <p className="text-sm text-slate-300">We set defined hours for each role and manage a prioritized task queue—so you can pivot smoothly without delaying deadlines.</p>
            </div>

            <div className="text-white border-t border-neutral-700 p-4 rounded">
                <MessageCircleMore size={35} />
                <h1 className="font-semibold text-xl ">Transparent Communication</h1>
                <p className="text-sm text-slate-300">You’ll receive regular updates on progress, workloads, and upcoming milestones—so you always know where your project stands.</p>
            </div>

            <div className="text-white border-t border-neutral-700 p-4 rounded">
                <Shapes size={35} />
                <h1 className="font-semibold text-xl ">Fully Scalable Teams</h1>
                <p className="text-sm text-slate-300">Our subscription model scales up or down as your project demands—seamlessly adding or removing resources to fit your needs.</p>
            </div>

            <div className="text-white border-t border-neutral-700 p-4 rounded">
                <ShieldCheck size={35} />
                <h1 className="font-semibold text-xl ">Relentless Quality</h1>
                <p className="text-sm text-slate-300">Every deliverable undergoes reviews, automated testing, and performance checks—ensuring the highest quality every time.</p>
            </div>


        </section>
    )
}

export default Features
