import { readFileSync } from "node:fs";

export interface FormattedKindleClipping {
  content: string;
  date: string;
  location: string;
  page: string;
  source: string;
  type: string;
}

export type NormalizedClipping = Omit<FormattedKindleClipping, "source">;

export interface NormalizeClippingsObjects {
  [key: string]: NormalizedClipping[];
}

export const kindleClippingsParer = (path: string) => {
  try {
    const myClippingsContent = readFileSync(path, "utf-8");

    const clippingsArray = myClippingsContent
      .split("==========")
      .reduce((acc, val) => {
        const trimmedClipping = val.toString().trim();

        if (trimmedClipping.length) {
          return [...acc, [trimmedClipping]];
        } else {
          return [...acc];
        }
      }, [] as string[][]);

    const formattedClippings = clippingsArray
      .map((clip) => {
        const clipArray = clip.join("").split("\n");

        const sourceInfo = clipArray[0];

        const [page, location, date] = clipArray[1].split("|");
        const locationNumber = location.trim().slice(8).trim();
        const pageNumber = page.match(/Your .+ on page (?<page>\d+)/)?.groups
          ?.page!;
        const type = page
          .match(/Your (?<type>.+) on page/)
          ?.groups?.type.toLowerCase()!;

        return {
          content: clipArray.slice(-1).toString(),
          date: date.slice(9).trim(),
          location: locationNumber,
          page: pageNumber,
          source: sourceInfo.trim(),
          type: type,
        };
      })
      .filter(
        (clipping) => clipping.type === "highlight" || clipping.type === "note"
      );

    return formattedClippings;
  } catch {
    return null;
  }
};
