"use client";
//use async await for server components
import Link from "next/link";
import { use } from "react";
// export default async function NewsArticle({
export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  //   const { articleId } = await params;
  //   const { lang = "en" } = await searchParams;
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News Article Id: {articleId}</h1>
      <p>Reading in language: {lang}</p>
      {/* <Link href="/articles/id?lang=en">English</Link>
      <Link href="/articles/id?lang=fr">French</Link>
      <Link href="/articles/id?lang=es">Spanish</Link> */}
      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
    </div>
  );
}
