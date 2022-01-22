import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { prisma } from "../lib/prisma";

const Blog: React.FC = () => {
	return <Layout>"Hello"</Layout>;
};

export default Blog;
