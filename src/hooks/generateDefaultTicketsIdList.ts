import { NUM_DEFAULT_TICKET_IN_LIST } from "../constants/settings";
import { generateRandomNums } from "./generateRandomNums";

export const generateDefaultTicketsIdList = generateRandomNums({
	min: 1000,
	max: 9999,
	numberRandom: NUM_DEFAULT_TICKET_IN_LIST,
})