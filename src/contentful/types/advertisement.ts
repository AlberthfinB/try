import type {
   ChainModifiers,
   Entry,
   EntryFieldTypes,
   EntrySkeletonType,
   LocaleCode,
} from "contentful";

export interface TypeAdvertisementFields {
   advertisement: EntryFieldTypes.Symbol;
}

export type TypeAdvertisementSkeleton = EntrySkeletonType<
   TypeAdvertisementFields,
   "advertisement"
>;
export type TypeAdvertisement<
   Modifiers extends ChainModifiers,
   Locales extends LocaleCode = LocaleCode
> = Entry<TypeAdvertisementSkeleton, Modifiers, Locales>;
