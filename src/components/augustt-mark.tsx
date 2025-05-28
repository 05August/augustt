export function AugusttMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 20"
      {...props}
    >
      <rect x="4" width="4" height="4" fill="currentColor" />
      <rect x="8" width="4" height="4" fill="currentColor" />
      <rect x="12" width="4" height="4" fill="currentColor" />
      <rect y="4" width="4" height="4" fill="currentColor" />
      <rect y="8" width="4" height="4" fill="currentColor" />
      <rect x="8" y="8" width="4" height="4" fill="currentColor" />
      <rect x="12" y="8" width="4" height="4" fill="currentColor" />
      <rect x="4" y="8" width="4" height="4" fill="currentColor" />
      <rect y="16" width="4" height="4" fill="currentColor" />
      <rect y="12" width="4" height="4" fill="currentColor" />
      <rect x="28" width="4" height="4" fill="currentColor" />
      <rect x="24" y="4" width="4" height="4" fill="currentColor" />
      <rect x="24" y="12" width="4" height="4" fill="currentColor" />
      <rect x="28" y="16" width="4" height="4" fill="currentColor" />
      <rect x="40" y="12" width="4" height="4" fill="currentColor" />
      <rect x="36" y="16" width="4" height="4" fill="currentColor" />
      <rect x="32" y="16" width="4" height="4" fill="currentColor" />
      <rect x="24" y="8" width="4" height="4" fill="currentColor" />
      <rect x="36" width="4" height="4" fill="currentColor" />
      <rect x="40" y="8" width="4" height="4" fill="currentColor" />
      <rect x="36" y="8" width="4" height="4" fill="currentColor" />
      <rect x="32" y="8" width="4" height="4" fill="currentColor" />
      <rect x="32" width="4" height="4" fill="currentColor" />
      <rect x="16" y="16" width="4" height="4" fill="currentColor" />
      <rect x="16" y="12" width="4" height="4" fill="currentColor" />
      <rect x="16" y="8" width="4" height="4" fill="currentColor" />
      <rect x="16" y="4" width="4" height="4" fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128">
      <rect x="4" width="4" height="4" fill="${color}" />
      <rect x="8" width="4" height="4" fill="${color}" />
      <rect x="12" width="4" height="4" fill="${color}" />
      <rect y="4" width="4" height="4" fill="${color}" />
      <rect y="8" width="4" height="4" fill="${color}" />
      <rect x="8" y="8" width="4" height="4" fill="${color}" />
      <rect x="12" y="8" width="4" height="4" fill="${color}" />
      <rect x="4" y="8" width="4" height="4" fill="${color}" />
      <rect y="16" width="4" height="4" fill="${color}" />
      <rect y="12" width="4" height="4" fill="${color}" />
      <rect x="28" width="4" height="4" fill="${color}" />
      <rect x="24" y="4" width="4" height="4" fill="${color}" />
      <rect x="24" y="12" width="4" height="4" fill="${color}" />
      <rect x="28" y="16" width="4" height="4" fill="${color}" />
      <rect x="40" y="12" width="4" height="4" fill="${color}" />
      <rect x="36" y="16" width="4" height="4" fill="${color}" />
      <rect x="32" y="16" width="4" height="4" fill="${color}" />
      <rect x="24" y="8" width="4" height="4" fill="${color}" />
      <rect x="36" width="4" height="4" fill="${color}" />
      <rect x="40" y="8" width="4" height="4" fill="${color}" />
      <rect x="36" y="8" width="4" height="4" fill="${color}" />
      <rect x="32" y="8" width="4" height="4" fill="${color}" />
      <rect x="32" width="4" height="4" fill="${color}" />
      <rect x="16" y="16" width="4" height="4" fill="${color}" />
      <rect x="16" y="12" width="4" height="4" fill="${color}" />
      <rect x="16" y="8" width="4" height="4" fill="${color}" />
      <rect x="16" y="4" width="4" height="4" fill="${color}" /></svg>`;
}
