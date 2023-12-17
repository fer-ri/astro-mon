import slug from "slugify";

export const slugify = (value: string): string => {
  return slug(value, {
    lower: true,
  });
};
