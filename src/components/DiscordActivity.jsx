import { useLanyard } from "react-use-lanyard"
import { useEffect } from "react"

import "../styles/DiscordActivity.scss"

export default function DiscordActivity() {
    const lanyard = useLanyard({
        userId: "662833597966843907"
    });

    const getDiscordInfo = () => {
        if (!lanyard.isValidating) {
            const discordInfo = lanyard.data.data
            const pfpElement = document.querySelector(".discord-pfp")
            const username = document.querySelector(".username")

            pfpElement.src = `https://cdn.discordapp.com/avatars/${discordInfo.discord_user.id}/${discordInfo.discord_user.avatar}.webp?size=512`;
            username.textContent = discordInfo.discord_user.username
        }
    }

    useEffect(() => {
        getDiscordInfo()
    })

    return (
        <div className="discord-activity">
            <img className="discord-pfp"></img>
            <h3 className="username"></h3>
        </div>
    )
}