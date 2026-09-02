import type { Course } from '../types'
import { whyADataWarehouseExists } from './01-why-a-data-warehouse-exists'
import { whatADataWarehouseIs } from './02-what-a-data-warehouse-is'
import { oltpVsOlap } from './03-oltp-vs-olap'
import { warehouseComponents } from './04-warehouse-components'
import { dataMarts } from './05-data-marts'
import { warehouseVsDataLake } from './06-warehouse-vs-data-lake'
import { schemaOnWriteVsRead } from './07-schema-on-write-vs-read'
import { theLakehouse } from './08-the-lakehouse'
import { inmonVsKimball } from './09-inmon-vs-kimball'
import { theModelingJourney } from './10-the-modeling-journey'

// foundations — module 01 of the ten-module spine. What a warehouse is, the workload it exists to
// serve, the parts it is built from, and the three long-running arguments (warehouse vs lake,
// schema-on-write vs -read, Inmon vs Kimball) that every later course inherits. Ten sections, ten
// scenes, ten wavs (13.2 min). Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct
// and FROZEN — never edit a `narration`.
export const foundations: Course = {
  id: 'foundations',
  title: 'Warehouse Foundations',
  sections: [
    whyADataWarehouseExists,
    whatADataWarehouseIs,
    oltpVsOlap,
    warehouseComponents,
    dataMarts,
    warehouseVsDataLake,
    schemaOnWriteVsRead,
    theLakehouse,
    inmonVsKimball,
    theModelingJourney,
  ],
}
