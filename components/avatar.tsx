import Image from "next/image"

export default function Avatar(){
    return (
        <div className="avatar">
            <div className="w-auto rounded-full">
                <Image src="/images/headshot.jpg" width={512} height={512} alt="headshot" />
            </div>
        </div>
    )
}