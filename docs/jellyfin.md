---
layout: page
title: Connecting to Tiff's Jellyfin media server
---

# Connecting to Tiff's Jellyfin media server

I'll send:
- a **Tailscale invite**
- your **Jellyfin username** (password left blank to start)

On every device you want to stream from, you'll need to do two things:
- Install Tailscale and log in.
- Install a streaming app to watch what's on the server. You'll log in with the server address **`http://media.twu.io`** and your Jellyfin username and password.

## 1. Set up Tailscale

1. Make a free account at [tailscale.com](https://tailscale.com).
2. Open your Tailscale invite and **accept** it with that account. You should see `t-mini` in your Tailscale machine list.

## 2. Start streaming

On each device:
1. Install **Tailscale** from the app store. Open it, log in, and connect.
2. Install the streaming app (see table below).
3. Add the server **`http://media.twu.io`**.
4. Sign in with your Jellyfin username.

**Important: Tailscale MUST be connected on the device for anything to work!**

| Device | App | Keeping Tailscale connected |
|---|---|---|
| iPad or iPhone | **Zuno** (offline downloads require subscription) or **Streamyfin** (free) | Turn on **VPN On Demand** in Tailscale's settings. |
| Google TV | **Wholphin** (free) | Tailscale doesn't always reconnect after the TV restarts. If your TV has Settings → Network & Internet → **VPN**, open Tailscale there and turn on **Always-on VPN**. Many Google TVs hide this setting. If yours does, check Tailscale before opening Wholphin. |
| Apple TV | **Zuno**  or **Neptune** | If the app can't find the server, open Tailscale and check that it's connected. |
| Mac | **Plezy** (paid) | Turn on **Launch at login** in Tailscale's settings. |

## 3. Request a movie or show

If something isn't on the server yet, you can request it in Seerr!

1. Make sure Tailscale is connected on this device.
1. Open **`http://requests.twu.io`** in a browser and sign in with your Jellyfin username and password.
2. Search for the title and click **Request**. For a show, pick the seasons you want.

- I approve each request manually for now. You'll get an email once the title is available.
- A title marked **Available** is already on the server.

## If something doesn't work

- **Loading issues:** First check that Tailscale is connected on the device. Open Tailscale and connect, then quit and reopen the streaming app.
- **Playback stutters:** Tell me which title and which device.
- **Subtitle problems:** Tell me the episode and the timestamp.
- **Low video quality:** Tell me which show and I can grab a higher-quality version.
