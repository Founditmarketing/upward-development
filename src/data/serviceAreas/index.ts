import type { ServiceArea } from './types';
import { lakeCharles } from './lake-charles';
import { sulphur } from './sulphur';
import { mossBluff } from './moss-bluff';
import { westlake } from './westlake';
import { carlyss } from './carlyss';
import { iowa } from './iowa';
import { vinton } from './vinton';
import { dequincy } from './dequincy';
import { deridder } from './deridder';
import { jennings } from './jennings';
import { kinder } from './kinder';

export type { ServiceArea, AreaSection } from './types';

/**
 * Ordered roughly by distance from our Lake Charles base. The hub page renders
 * them in this order.
 */
export const serviceAreas: ServiceArea[] = [
  lakeCharles,
  mossBluff,
  westlake,
  sulphur,
  carlyss,
  iowa,
  vinton,
  dequincy,
  jennings,
  kinder,
  deridder,
];

export const getServiceArea = (slug: string) =>
  serviceAreas.find(a => a.slug === slug);

export const serviceAreaPaths = serviceAreas.map(a => `/service-areas/${a.slug}`);
