export const navigations = [
  // { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },

  { label: "Quick Navigation", type: "label", color: "#1a2038" },
  {
    name: "Domain Accounts",
    color: "#1a2038",
    icon: "payment",
    id: "notes-to-fs", // Add a custom ID
    children: [
      {
        name: "Create Account",
        path: "/dashboard/frmAccountDialog",
        color: "#1a2038",
      },
      {
        name: "Create Affliate",
        path: "/dashboard/create-affliate",
        color: "#1a2038",
      },
      {
        name: "Create Domain",
        path: "/dashboard/create-domain",
        color: "#1a2038",
      },
      {
        name: "All Account",
        path: "/dashboard/all-account",
        color: "#1a2038",
      },
    ],
  },

  {
    name: "Active Domain Users",
    color: "#1a2038",
    icon: "payment",
    id: "notes-to-fs", // Add a custom ID
    children: [
      {
        name: "Notes Index",
        path: "/charts/echarts",
        color: "#1a2038",
      },
      {
        name: "Notes 1 -3a",
        path: "/dashboard/note-1",
        color: "#1a2038",
      },
      {
        name: "Notes 3a - 3d",
        path: "/dashboard/note-1-3",
        color: "#1a2038",
      },
      {
        name: "Notes 3e - 3p",
        path: "/dashboard/note-3e-p",
        color: "#1a2038",
      },
      {
        name: "Notes 4-8",
        path: "/dashboard/note-4-8b",
        color: "#1a2038",
      },
      {
        name: "Notes 8c-9e",
        path: "/dashboard/note-8c-9e",
        color: "#1a2038",
      },
      { name: "Note 10a", path: "dashboard/note-10a", color: "#1a2038" },
      {
        name: "Notes 11-15b",
        path: "/dashboard/note-11-15b",
        color: "#1a2038",
      },
      {
        name: "Notes 15c - 18c",
        path: "/dashboard/note-15c-18c",
        color: "#1a2038",
      },
      { name: "Note 19", path: "/dashboard/note-19", color: "#1a2038" },
      {
        name: "Notes 20 - 24",
        path: "/dashboard/note-20-24",
        color: "#1a2038",
      },
    ],
  },
  {
    name: "Administrative Tools",
    color: "#1a2038",
    icon: "payment",
    id: "notes-to-fs", // Add a custom ID
    children: [
      {
        name: "User Administration",
        path: "/dashboard/user-administration",
        color: "#1a2038",
      },
      {
        name: "User Account Assignment",
        path: "/dashboard/note-1",
        color: "#1a2038",
      },
      {
        name: "New Account Setup",
        path: "/dashboard/note-1-3",
        color: "#1a2038",
      },
      {
        name: "Delete Account",
        path: "/dashboard/note-3e-p",
        color: "#1a2038",
      },
      {
        name: "Account Title & Stmt Path",
        path: "/dashboard/note-4-8b",
        color: "#1a2038",
      },
      {
        name: "Reset Working Month",
        path: "/dashboard/note-8c-9e",
        color: "#1a2038",
      },
      { name: "Note 10a", path: "dashboard/note-10a", color: "#1a2038" },
      {
        name: "Matching Rules Setup",
        path: "/dashboard/matching-rule",
        color: "#1a2038",
      },
      {
        name: "Unlock Account(s)",
        path: "/dashboard/note-15c-18c",
        color: "#1a2038",
      },
    ],
  },

  {
    name: "Aggregate Summary",
    color: "#1a2038",
    icon: "payment",
    id: "notes-to-fs", // Add a custom ID
    children: [
      {
        name: "Summary",
        path: "/dashboard/note-8c-9e",
        color: "#1a2038",
      },
    ],
  },

  {
    name: "View Reconcilation Summary",
    color: "#1a2038",
    icon: "payment",
    id: "notes-to-fs", // Add a custom ID
    children: [
      {
        name: "View Reconcilation",
        path: "/dashboard/frmRecoSum",
        color: "#1a2038",
      },
    ],
  },
  // {
  //     name: 'Financial Summary',
  //     path: '/dashboard/financial-summary',
  //     color: '#1a2038',
  // },
  // { name: 'VAS', path: '/dashboard/value-added-statement', color: '#1a2038' },
  // {
  //     name: 'print & export report',
  //     path: '/dashboard/print-view',
  //     color: '#1a2038',
  // },
];
