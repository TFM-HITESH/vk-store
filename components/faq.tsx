import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question 1 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question 2 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Question 3 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Question 4 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Question 5 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Question 6 ?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          nisl vel nisi molestie, at vehicula nulla lobortis Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi
          molestie, at vehicula nulla lobortis
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
