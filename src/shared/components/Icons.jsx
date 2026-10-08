const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function PlusIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function PencilIcon(props) {
  return (
    <svg {...svgProps} strokeWidth={2} {...props}>
      <path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 17v3Z" />
      <path d="m14 8 3 3" />
    </svg>
  );
}

export function TrashIcon(props) {
  return (
    <svg {...svgProps} strokeWidth={2} {...props}>
      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
    </svg>
  );
}

export function ImageIcon(props) {
  return (
    <svg {...svgProps} strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-4.5-4.5L5 21" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...svgProps} strokeWidth={3} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MinusIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
