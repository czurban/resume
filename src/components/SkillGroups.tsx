import type { SkillGroup } from "../types";

export const SkillGroups = ({ label, skills }: SkillGroup) => {
  return (
    <div className="mb-5 last:mb-0">
      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm text-zinc-300 border border-[#232328] rounded-full px-3 py-1 hover:border-zinc-500 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
