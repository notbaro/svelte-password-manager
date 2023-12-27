import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const black: CustomThemeConfig = {
    name: 'black',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-primary-50)",
		"--on-secondary": "var(--color-primary-50)",
		"--on-tertiary": "var(--color-primary-50)",
		"--on-success": "var(--color-warning-50)",
		"--on-warning": "0 0 0",
		"--on-error": "var(--color-surface-700)",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #373737 
		"--color-primary-50": "225 225 225", // #e1e1e1
		"--color-primary-100": "215 215 215", // #d7d7d7
		"--color-primary-200": "205 205 205", // #cdcdcd
		"--color-primary-300": "175 175 175", // #afafaf
		"--color-primary-400": "115 115 115", // #737373
		"--color-primary-500": "55 55 55", // #373737
		"--color-primary-600": "50 50 50", // #323232
		"--color-primary-700": "41 41 41", // #292929
		"--color-primary-800": "33 33 33", // #212121
		"--color-primary-900": "27 27 27", // #1b1b1b
		// secondary | #373737 
		"--color-secondary-50": "225 225 225", // #e1e1e1
		"--color-secondary-100": "215 215 215", // #d7d7d7
		"--color-secondary-200": "205 205 205", // #cdcdcd
		"--color-secondary-300": "175 175 175", // #afafaf
		"--color-secondary-400": "115 115 115", // #737373
		"--color-secondary-500": "55 55 55", // #373737
		"--color-secondary-600": "50 50 50", // #323232
		"--color-secondary-700": "41 41 41", // #292929
		"--color-secondary-800": "33 33 33", // #212121
		"--color-secondary-900": "27 27 27", // #1b1b1b
		// tertiary | #373737 
		"--color-tertiary-50": "225 225 225", // #e1e1e1
		"--color-tertiary-100": "215 215 215", // #d7d7d7
		"--color-tertiary-200": "205 205 205", // #cdcdcd
		"--color-tertiary-300": "175 175 175", // #afafaf
		"--color-tertiary-400": "115 115 115", // #737373
		"--color-tertiary-500": "55 55 55", // #373737
		"--color-tertiary-600": "50 50 50", // #323232
		"--color-tertiary-700": "41 41 41", // #292929
		"--color-tertiary-800": "33 33 33", // #212121
		"--color-tertiary-900": "27 27 27", // #1b1b1b
		// success | #008000 
		"--color-success-50": "217 236 217", // #d9ecd9
		"--color-success-100": "204 230 204", // #cce6cc
		"--color-success-200": "191 223 191", // #bfdfbf
		"--color-success-300": "153 204 153", // #99cc99
		"--color-success-400": "77 166 77", // #4da64d
		"--color-success-500": "0 128 0", // #008000
		"--color-success-600": "0 115 0", // #007300
		"--color-success-700": "0 96 0", // #006000
		"--color-success-800": "0 77 0", // #004d00
		"--color-success-900": "0 63 0", // #003f00
		// warning | #ffff00 
		"--color-warning-50": "255 255 217", // #ffffd9
		"--color-warning-100": "255 255 204", // #ffffcc
		"--color-warning-200": "255 255 191", // #ffffbf
		"--color-warning-300": "255 255 153", // #ffff99
		"--color-warning-400": "255 255 77", // #ffff4d
		"--color-warning-500": "255 255 0", // #ffff00
		"--color-warning-600": "230 230 0", // #e6e600
		"--color-warning-700": "191 191 0", // #bfbf00
		"--color-warning-800": "153 153 0", // #999900
		"--color-warning-900": "125 125 0", // #7d7d00
		// error | #ff0000 
		"--color-error-50": "255 217 217", // #ffd9d9
		"--color-error-100": "255 204 204", // #ffcccc
		"--color-error-200": "255 191 191", // #ffbfbf
		"--color-error-300": "255 153 153", // #ff9999
		"--color-error-400": "255 77 77", // #ff4d4d
		"--color-error-500": "255 0 0", // #ff0000
		"--color-error-600": "230 0 0", // #e60000
		"--color-error-700": "191 0 0", // #bf0000
		"--color-error-800": "153 0 0", // #990000
		"--color-error-900": "125 0 0", // #7d0000
		// surface | #000000 
		"--color-surface-50": "217 217 217", // #d9d9d9
		"--color-surface-100": "204 204 204", // #cccccc
		"--color-surface-200": "191 191 191", // #bfbfbf
		"--color-surface-300": "153 153 153", // #999999
		"--color-surface-400": "77 77 77", // #4d4d4d
		"--color-surface-500": "0 0 0", // #000000
		"--color-surface-600": "0 0 0", // #000000
		"--color-surface-700": "0 0 0", // #000000
		"--color-surface-800": "0 0 0", // #000000
		"--color-surface-900": "0 0 0", // #000000
		
	}
}
