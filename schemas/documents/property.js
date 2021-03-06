import { MdStoreMallDirectory } from "react-icons/md";
import StringWithLimits from "../../components/StringWithLimits";
import TwitterUrl from "../../components/TwitterUrl";

export default {
  name: "property",
  title: "Property",
  icon: MdStoreMallDirectory,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        layout: "radio",
        list: [
          {
            title: "House",
            value: "house",
          },
          {
            title: "Flat",
            value: "flat",
          },
          {
            title: "Bed and Breakfast",
            value: "bed-and-breakfast",
          },
          {
            title: "Jail",
            value: "jail",
          },
        ],
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "pricePerNight",
      title: "Price Per Night",
      type: "number",
    },
    { name: "beds", title: "Beds", type: "number" },
    { name: "bedrooms", title: "Bedrooms", type: "number" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    { name: "id", title: "ID", type: "number" },
    { name: "description", title: "Description", type: "string" },
    { name: "host", title: "host", type: "host" },
    {
      name: "limited",
      title: "String that is limited",
      type: "string",
      inputComponent: StringWithLimits,
      validation: (Rule) => Rule.max(100),
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "datetime",
    },
    {
      name: "favoriteColor",
      title: "Favorite color",
      type: "color",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "review",
        },
      ],
    },
    {
      name: "twitter",
      title: "Twitter URL",
      type: "url",
      inputComponent: TwitterUrl,
      options: {
        prepend: "https://twitter.com/",
      },
    },
  ],
  orderings: [
    {
      title: "Release Date, New",
      name: "releaseDateDesc",
      by: [{ field: "releaseDate", direction: "desc" }],
    },
    {
      title: "Release Date, Old",
      name: "releaseDateAsc",
      by: [{ field: "releaseDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
    },
    prepare({ title, date }) {
      return {
        title: title,
        subtitle: date.split("-")[0],
      };
    },
  },
};
