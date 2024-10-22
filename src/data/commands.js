import releases from "./releases.json";

export const commands = {
    theme: `wget -N -P /home/deck ${releases.theme.url} && unzip -o -d /home/deck /home/deck/homebrew`,
    decky: 'curl -L https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/install_release.sh | sh'
}
