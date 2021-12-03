export const menuItems: Array<{
  name: string
  label: string
  path: string
  isExternal?: boolean
  items?: Array<{
    name: string
    label: string
    path: string
    isExternal?: boolean

    items?: Array<{
      name: string
      label: string
      path: string
      isExternal?: boolean
    }>
  }>
}> = [
  {
    name: "",
    path: "/",
    label: "Home"
  },
  {
    name: "about-us",
    label: "About Us",
    path: '/about-us'
  },
  {
    name: "consultancy",
    label: "Consultancy",
    path: '/consultancy'
  },
  {
    name: "news",
    label: "News",
    path: '/news'
  },
  {
    name: "education",
    label: "Education",
    path: '/education'
  },
  {
    name: "contact-us",
    label: "Contact Us",
    path: '/contact-us'
  },
  // {
  //   name: "pages",
  //   label: "Pages",
  //   items: [
  //     { name: "about", label: "About" },
  //     {
  //       name: "career",
  //       label: "Career",
  //       items: [
  //         { name: "career", label: "Career List" },
  //         { name: "career-details", label: "Career Details" },
  //       ],
  //     },
  //     {
  //       name: "case-study",
  //       label: "Case Study",
  //       items: [
  //         { name: "case-study", label: "Case Study" },
  //         { name: "case-study-details", label: "Case Study Details" },
  //       ],
  //     },
  //     {
  //       name: "blog",
  //       label: "Blog",
  //       items: [
  //         { name: "blog-regular", label: "Blog Regular" },
  //         { name: "blog-left-sidebar", label: "Blog Left Sidebar" },
  //         { name: "blog-right-sidebar", label: "Blog Right Sidebar" },
  //         { name: "blog-details", label: "Blog Details" },
  //       ],
  //     },
  //     {
  //       name: "contact",
  //       label: "Contact",
  //       items: [
  //         { name: "contact-1", label: "Contact 01" },
  //         { name: "contact-2", label: "Contact 02" },
  //         { name: "contact-3", label: "Contact 03" },
  //       ],
  //     },
  //     {
  //       name: "account",
  //       label: "Account",
  //       items: [
  //         { name: "signin", label: "Signin" },
  //         { name: "signin-bg", label: "Signin BG" },
  //         { name: "signup", label: "Signup" },
  //         { name: "signup-bg", label: "Signup BG" },
  //         { name: "reset-pass", label: "Reset Password" },
  //         { name: "reset-pass-bg", label: "Reset Password BG" },
  //       ],
  //     },
  //     {
  //       name: "pricing",
  //       label: "Pricing",
  //       items: [
  //         { name: "pricing-1", label: "Pricing 01" },
  //         { name: "pricing-2", label: "Pricing 02" },
  //       ],
  //     },
  //     {
  //       name: "utility",
  //       label: "Utility",
  //       items: [
  //         { name: "coming-soon", label: "Coming Soon" },
  //         { name: "coming-soon-2", label: "Coming Soon 02" },
  //         { name: "404", label: "404 Page" },
  //         { name: "thank-you", label: "Thank You" },
  //         { name: "terms-conditions", label: "Terms & Conditions" },
  //       ],
  //     },
  //     {
  //       name: "essential",
  //       label: "Essential",
  //       items: [
  //         { name: "faq", label: "FAQ" },
  //         { name: "reviews", label: "Reviews" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "https://uxtheme.net/product-support/",
  //   label: "Support",
  //   isExternal: true,
  // },
];
