import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "$lib/firebase";
import { readable } from "svelte/store";
import type { User } from "firebase/auth";

export const user = readable<User | null | undefined>(undefined, set => onAuthStateChanged(firebaseAuth, set))