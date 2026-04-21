import type { ComponentType } from "react";
import Service2BHK from "@/views/services/Service2BHK";
import Service3BHK from "@/views/services/Service3BHK";
import ServiceBalcony from "@/views/services/ServiceBalcony";
import ServiceBathroom from "@/views/services/ServiceBathroom";
import ServiceBedroom from "@/views/services/ServiceBedroom";
import ServiceCrockeryUnit from "@/views/services/ServiceCrockeryUnit";
import ServiceDiningRoom from "@/views/services/ServiceDiningRoom";
import ServiceFalseCeiling from "@/views/services/ServiceFalseCeiling";
import ServiceFoyer from "@/views/services/ServiceFoyer";
import ServiceFullHome from "@/views/services/ServiceFullHome";
import ServiceGuestRoom from "@/views/services/ServiceGuestRoom";
import ServiceHomeOffice from "@/views/services/ServiceHomeOffice";
import ServiceKidsRoom from "@/views/services/ServiceKidsRoom";
import ServiceLivingRoom from "@/views/services/ServiceLivingRoom";
import ServiceModularKitchen from "@/views/services/ServiceModularKitchen";
import ServicePoojaRoom from "@/views/services/ServicePoojaRoom";
import ServiceStudyRoom from "@/views/services/ServiceStudyRoom";
import ServiceTVUnit from "@/views/services/ServiceTVUnit";
import ServiceVilla from "@/views/services/ServiceVilla";
import ServiceWardrobe from "@/views/services/ServiceWardrobe";

export const SERVICE_COMPONENTS: Record<string, ComponentType> = {
  "2bhk-interiors": Service2BHK,
  "3bhk-interiors": Service3BHK,
  "balcony-design": ServiceBalcony,
  "bathroom-design": ServiceBathroom,
  "bedroom-design": ServiceBedroom,
  "crockery-unit": ServiceCrockeryUnit,
  "dining-room": ServiceDiningRoom,
  "false-ceiling": ServiceFalseCeiling,
  "foyer-entrance": ServiceFoyer,
  "full-home-design": ServiceFullHome,
  "guest-room": ServiceGuestRoom,
  "home-office": ServiceHomeOffice,
  "kids-room": ServiceKidsRoom,
  "living-room": ServiceLivingRoom,
  "modular-kitchen": ServiceModularKitchen,
  "pooja-room": ServicePoojaRoom,
  "study-room": ServiceStudyRoom,
  "tv-unit": ServiceTVUnit,
  "villa-interiors": ServiceVilla,
  "wardrobe-design": ServiceWardrobe,
};

export const ALL_SERVICE_SLUGS = Object.keys(SERVICE_COMPONENTS);

