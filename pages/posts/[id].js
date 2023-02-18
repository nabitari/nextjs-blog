import { getAllPostIds,getPostData } from "@/lib/lector";
import Head from "next/head";


export async function getStaticProps ({params}){
    const postData = await getPostData(params.id);
    return{
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({postData}){
    return(
        <div>
            <article>
                <h1>{postData.titulo}</h1>
                <p>{postData.fecha}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    );
}