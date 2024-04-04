import type { APIRoute } from "astro";
import { db, Content, eq, and } from 'astro:db';

export const prerender = false;

export async function getStaticPaths() {
  const contents = await db.select().from(Content).where(eq(Content.published, true));
  return contents.map(({ id }) => {
    return {
      params: { id },
    };
  });
}

export const GET: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  let contents = {};
  if( ctx.params.id === undefined ){
    contents = await db.select().from(Content).where(eq(Content.published, true));
  }
  else{
    const id: number = ctx.params.id as unknown as number;
    contents = await db.select().from(Content).where(and(eq(Content.published, true),eq(Content.id, id)));
  }
  //console.log('content',content)
  return new Response(JSON.stringify(contents));
}

export const PUT: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  console.log('PUT',ctx)
  let contents = {};
  if( ctx.params.id === undefined ){
    contents = await db.select().from(Content).where(eq(Content.published, true));
  }
  else{
    if( ctx.request.body === undefined || ctx.request.body === null ) {
      throw new Error('No body')
    }
    else{
      const id: number = ctx.params.id as unknown as number;
      const request = await ctx.request.json();
      //console.log('body',body)
      //contents = await db.select().from(Content).where(and(eq(Content.published, true),eq(Content.id, id)));
      console.log('request.data',request.data)
      contents = await db.update(Content).set({ 
        alias: request.data.alias,
        title: request.data.title,
        body: request.data.body
       }).where(eq(Content.id, id));
    }
  }
  //console.log('content',content)
  return new Response(JSON.stringify(contents));
}


  /*
export const DELETE: APIRoute = async (ctx) => {
    
    //await db.delete(Content).where(eq(Content.id, ctx.params.id ));
    return new Response(null, { status: 204 });
  }



export const HEAD: APIRoute = async (ctx) => {
    //await db.select(Content).where(eq(Content.id, ctx.params.id ));
    return new Response(null, { status: 204 });
  }
  
export const PUT: APIRoute = async (ctx) => {
    
    const updatedContentId: { updatedId: number }[] = await db.update(Content)
        .set(ctx.body)
        .where(eq(Content.id, ctx.params.id ))
        .returning({ updatedId: Content.id });
    return new Response(updatedContentId, { status: 204 });
    
    return new Response(null, { status: 204 });
  }

  export const POST: APIRoute = async (ctx) => {
    
    const newContentId: { newId: number }[] = await db.update(Content)
        .set(ctx.body)
        .returning({ newId: Content.id });
    return new Response(newContentId, { status: 204 });
    
    return new Response(null, { status: 204 });

  }

  */
  