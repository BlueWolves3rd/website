import kenDoodle from "@/assets/wip/ken_doodle.png";

export const WorkInProgress = () => {
    return (
        <div className="w-full px-64 bg-primary min-h-screen">
            <div className="flex justify-center mt-40">
                  <img src={kenDoodle} className="h-48" />
            </div>
            <div className="text-center">
                <div className="font-metropolis px-10 py-5 skew-x-[-24deg]
                text-4xl inline-block font-bold mt-24 mb-8 text-white">
                    Essa página está sob construção. Ela ainda não está finalizada. Pedimos sua paciência.
                </div>
            </div>
        </div>
    )
}