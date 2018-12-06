export interface Jump {
  runStep: number;
  poleFeet?: number;
  poleInch?: number;
  runwayMark?: number;
  mentalQues?: string;
  wasClearance?: boolean;
  clearanceHeight?: number;
  goodOrBad?: boolean;
  whyGoodOrBad?: string;
  jumpDay: string;
}
