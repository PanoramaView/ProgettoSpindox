import { Routes } from "@angular/router";

import { PostsComponent } from "../../pages/posts/posts.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "icons", component: IconsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
