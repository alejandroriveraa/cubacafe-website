import React from "react"
import {Outlet} from "react-router-dom"
import ViewMore from "../../components/view-more/ViewMore"
import "./InnerLayout.css"
import "./InnerLayout.responsive.css"

function InnerLayout() {
  return (
    <div className="inner-layout">
      <Outlet />
      <ViewMore />
    </div>
  )
}

export default InnerLayout