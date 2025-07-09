import { useState } from 'react'
import {Route, Routes, BrowserRouter } from "react-router";

import Signup from "./components/signup";
import Signin from "./components/signin";
import Blogs from "./components/blogs";
import CreateBlog from "./components/createBlog";
import IndividualBlog from "./components/individual_blog";
import Landing from "./components/landingPage";
import YourBlogs from "./components/yourBlogs";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/blogs/:blogId" element={<IndividualBlog />} />
      <Route path="/yourBlogs" element={<YourBlogs />} />
      <Route path="/" element={<Landing />} />
    </Routes>

  </BrowserRouter>

}

export default App
