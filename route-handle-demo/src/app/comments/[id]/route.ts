import { comments } from '../data';

export const GET = async (
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id.toString() === id);

  return Response.json(comment);
};
