import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Maximilien Digital",
  description: "Conseils et stratégies pour réussir votre produit digital.",
};

export default function BlogPage() {
  return <BlogClient />;
}
