import { comments } from '../data';

export const GET = async (
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id.toString() === id);

  return Response.json(comment);
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const data = await request.json();
  const index = comments.findIndex((comment) => comment.id.toString() === id);
  comments[index].text = data.text;

  return Response.json(comments[index]);
};
