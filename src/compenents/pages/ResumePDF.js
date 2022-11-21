import React from "react";
import PDF from "../../assets/fake-resume.pdf";

export default function ResumePDF() {
  return (
    <div>
      <object width="100%" height="800" data={PDF} type="application/pdf" />;
    </div>
  );
}
