// place files you want to import through the `$lib` alias in this folder.

import type { ToastSettings } from "@skeletonlabs/skeleton";

export const firebaseErrorCodeToToastSettings = (code: string) => {
  const t: ToastSettings = {
    message: '',
    background: 'variant-filled-error',
  };
  switch (code) {
    case "auth/wrong-password":
      t.message = 'Wrong Password'
      break;
  
    default:
      t.message = 'Unknown Error'
      break;
  }
  return t;
}