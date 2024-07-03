//@ts-nocheck
import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import TopNav from "@modules/header/TopNav/TopNav"
import Menu from "@modules/header/Menu/Menu"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <TopNav props="bg-[#efefef]" slogan="FREE GROUND SHIPPING ON ORDERS $100+ SHOP NOW" />
      <Menu props="bg-white"  />
      {props.children}
      <Footer />
    </>
  )
}
