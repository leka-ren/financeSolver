import { createDomain } from "effector";

const pageLoadDomain = createDomain();

export const pageLoad = pageLoadDomain.createEvent();
