import { useSearchParams } from "react-router-dom";

export type Done = "all" | "true" | "false";
export type Filters = {
  courseId: number | null;
  done: Done;
  q: string;
};

export function useUrlFilters() {
  const [params, setParams] = useSearchParams();

  const q = params.get("q") || "";

  const rawDone = (params.get("done") || "all").toLowerCase();
  const done: Done =
    rawDone === "true" || rawDone === "false" ? (rawDone as Done) : "all";

  const cid = params.get("courseId"); // ← no default
  const courseId = cid !== null ? Number(cid) : null;

  const update = (patch: Partial<Filters>) => {
    const next = new URLSearchParams(params);

    if (patch.q !== undefined) {
      if (patch.q) next.set("q", patch.q);
      else next.delete("q");
    }

    if (patch.done !== undefined) {
      if (patch.done === "all") next.delete("done");
      else next.set("done", patch.done);
    }

    if (patch.courseId !== undefined) {
      if (patch.courseId === null) next.delete("courseId");
      else next.set("courseId", String(patch.courseId));
    }

    setParams(next);
  };

  return { q, done, courseId, update };
}
