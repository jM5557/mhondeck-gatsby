import releases from "./releases.json";

export const commands = {
    theme: `wget -N -O /home/deck/homebrew.zip ${releases.theme.url} && unzip -o -d /home/deck /home/deck/homebrew.zip && rm /home/deck/homebrew.zip`,
    decky: 'curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh'
}
