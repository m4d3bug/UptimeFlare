const config = {
  // Your locale for server-side callback. (client-side will always follow browser settings)
  dateLocale: 'zh-CN',
  // Your timezone for server-side callback. (client-side will always follow browser settings)
  timezone: 'Asia/Shanghai',
  page: {
    // Title for your status page
    title: "m4d3bug's Status Page",
    // Links shown at the header of your status page, could set `highlight` to `true`
    links: [
      { link: 'https://blog.madebug.net', label: 'Blog' },
      { link: 'https://lb-00.m4d3bug.com', label: 'LB-00' },
      { link: 'https://lb-01.m4d3bug.com', label: 'LB-01' },
      { link: 'https://lb-02.m4d3bug.com', label: 'LB-02' },
      { link: 'https://whoogle.madebug.net', label: 'Whoogle' },
      { link: 'https://ai.madebug.net', label: 'AI' },
      // { link: 'mailto:me@lyc8503.site', label: 'Email Me', highlight: true },
    ],
  },
  callback: async (statusChangeMsg: string) => {
    // Write any typescript here
    // Example `statusChangeMsg` string:
    // "❌My Blog went down at 2023/11/18 14:08:59 with error Timeout after 10000ms"
    // "✔️My Blog came back up at 2023/11/18 14:10:48 after 2 minutes of downtime"
    // Example:
    // await fetch('https://api.example.com/callback?msg=' + statusChangeMsg)
  },
  // Define all your monitors here
  monitors: [
        // Example HTTP Monitor
    {
      id: 'Blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.madebug.net',
      expectedCodes: [200],
      timeout: 10000,

    },
    {
      id: 'lB-00',
      name: 'lb-00',
      method: 'GET',
      target: 'https://lb-00.m4d3bug.com',
      expectedCodes: [200],
      timeout: 10000,

    },
    {
      id: 'lB-01',
      name: 'lb-01',
      method: 'GET',
      target: 'https://lb-01.m4d3bug.com',
      expectedCodes: [200],
      timeout: 10000,

    },
    {
      id: 'lB-02',
      name: 'lb-02',
      method: 'GET',
      target: 'https://lb-02.m4d3bug.com',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'success',
    },
    {
      id: 'Whoogle',
      name: 'Whoogle',
      method: 'GET',
      target: 'https://whoogle.madebug.net',
      expectedCodes: [200],
      timeout: 10000,

    },
    {
      id: 'AI',
      name: 'AI',
      method: 'GET',
      target: 'https://ai.madebug.net',
      expectedCodes: [200],
      timeout: 10000,

    },
    // Example TCP Monitor
    {
      id: 'google_dns_monitor',
      name: 'Google DNS Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'UDP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '8.8.4.4:53',
      tooltip: 'For fun',
      timeout: 5000,
    },
  ],
}

// Don't forget this, otherwise compilation fails.
export default config
