---
layout: post
title:  Simulating mobile devices in Chrome
date:   2016-06-09 00:17:28 +0200
flesch-score: 50.07
flesch-level: High Schooler
image:
  filename: mobile-devices-on-table
  alt: Table with Macbook laptop, iPhone, iPad and other devices placed neatly onto it
  website: StockSnap.io
  url: https://stocksnap.io/photo/CRNZFWFZYG
licence:
  name: CCO Licence
  url: https://stocksnap.io/license
photographer:
  name: Luis Llerena
  url: https://stocksnap.io/author/4440
social-teaser: >
  Discover the simulation power behind the Device Mode feature in Google Chrome.
tags: technical
---

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
has a feature called **Device Mode** since Chrome 49.
This feature extends some previous features by allowing you to simulate
different devices and capabilities. Possible use cases include:

* Visual aid for designing a mobile-first and / or responsive web site
* Verify your implementation after you have implemented a design given to
  you by a front-end developer or agency
* Verify device, browser or OS specific features implemented on a web page
* Mimic browsing from a specific location
* Mimic different network conditions

**Disclaimer:** This tool will only simulate the display of a web page
rendered by your version of the Chrome browser, so don't assume it works as expected
across all devices and browsers. It can't emulate the performance
characteristics of a real device. There are tools and services that can be
used to achieve this but is beyond the scope of this topic.

## Getting started

1. Open the **Developer Tools** window.

   Open the **Chrome menu**
   ![Chrome menu icon](/img/posts/chrome/icon-chrome-menu.png "Chrome menu icon")
   at the top-right of your browser window, then select
   **More tools > Developer tools**.

   Use a shortcut:

    * Windows: `F12` or `Ctrl` + `Shift` + `I`
    * Mac: `Cmd` + `Opt` + `I`

2. Enable the **Device Mode** feature.

   Click on the **Device Mode**
   ![Device Mode icon](/img/posts/chrome/icon-device-mode.png "Device Mode icon")
   icon at the top-left of the **Developer Tools** window.

   You could use shortcuts, but make sure the focus is on the Developer Tools
   window and not the browser window for it to work.

     * Windows: `Ctrl` + `Shift` + `M`
     * Mac: `Cmd` + `Shift` + `M`

You can disable Device Mode by clicking on the icon or using the same
shortcuts as above.

## Viewport controls
These controls give you the ability to test your web page across a variety of
devices or directly interact with the responsive nature of it. You can change
the device, width, height, zoom and orientation *(if height is present)*.

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/viewport-controls.jpg"
     description="iPad device selected through the Viewport controls"
%}

### Pre-configured devices
You can add pre-configured devices to the list by clicking on
**Device dropdown > Edit...**. Check the boxes of the devices you want to add
to the list. Click on the device dropdown in the viewport controls to see your
updated list.

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/emulated-devices.jpg"
     description="Selected Galaxy Note 3 and Galaxy Note II in emulated devices<br/>
       to add them to the list of devices"
%}

### Custom devices
You can add your own devices by following the same steps as above but instead of
checking boxes you can click on the **Add custom device...** button.

**Note:** The simulator makes use of User Agent strings. These are used by
web browsers and applications to identify themselves by web servers.

You can get a comprehensive list from
[User Agent String.com](http://www.useragentstring.com/).

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/add-custom-device.jpg"
     description="Add custom device using User Agent String for SeaMonkey on Linux<br/>
       <code>Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20120501 Firefox/12.0 SeaMonkey/2.9.1 Lightning/1.4</code>"
%}

**Tip:** Increase the height of the Developer Tools window before adding the new device.
The Settings modal overlays the Developer Tools window. If you increase
the height of the window, the overlay will fill it. Unfortunately once the
modal is open, the window height cannot be adjusted *(at least not on Windows)*.

## Media queries
You can use the media query inspector by clicking on **Show media queries** in
the vertical three dot menu at the top-right corner of the Viewport controls.

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/show-media-queries.jpg"
     description="Media queries inspector on iPad display"
%}

The media queries for the web page are detected and displayed as colored bars.
When you **right-click** on a color, you can reveal the CSS in the source code.

<div style="margin-bottom: 25px;">
  <span style="width: 1em; height: 1em; background-color: #327ff2; display: inline-block; margin-right: 0.5em;"></span>
  Queries targeting a maximum width<br/>
  Example: <code>@media only screen and (max-width: 960px)</code>
</div>
<div style="margin-bottom: 25px;">
  <span style="width: 1em; height: 1em; background-color: #3b9903; display: inline-block; margin-right: 0.5em;"></span>
  Queries targeting widths within a range<br/>
  Example: <code>@media (min-width: 768px) and (max-width:960px)</code>
</div>
<div style="margin-bottom: 25px;">
  <span style="width: 1em; height: 1em; background-color: #d4731f; display: inline-block; margin-right: 0.5em;"></span>
  Queries targeting a minimum width<br/>
  Example: <code>@media (min-width: 768px)</code>
</div>

**Tip:** If you are inspecting minified CSS (or JavaScript), you will notice
a curly brace icon **{ }** at the bottom of the view pane next to the line number.
Click on this to format the source code for easier reading.

## Connection throttling
You can mimic different network related behaviors by throttling your connection
speed for the tab you are inspecting on.

Click on **Show throttling** in the vertical three dot menu at the top-right
corner of the Device Mode window. Select a speed to test your page at. You
will need to refresh the page to see the result. You may also want to monitor
your network traffic and page load time using the **Network** tab in the
Developer Tools window.

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/throttling.jpg"
     description="GPRS selected in throttling options"
%}

For out more about
[optimizing performance under varying network conditions](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/network-conditions).

## Emulate sensors
When developing on a desktop you are at a disadvantage as there isn't native
support hardware for GPS and accelerometers.

Chrome DevTools has a **Sensors Emulation** feature which allows you to
override geolocation coordinates and device orientation accelerometer data.

Click on the vertical three dot menu at the top-right corner of the Developer Tools
window > **More tools > Sensors**.

{% include posts/image-caption.html
     url="/img/posts/chrome-device-mode/sensors.jpg"
     description="Enabled emulate geolocation coordinates and device orientation<br/>
       selected in sensors tab with default data"
%}

Find out more about [emulating sensors](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/device-input-and-sensors).

---

## Resources

* [Chrome Keyboard and UI Shortcuts Reference](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts)
* [Simulate Mobile Devices with Device Mode](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/)
* [Test Responsive and Device-specific Viewports](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/emulate-mobile-viewports)
