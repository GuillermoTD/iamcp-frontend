import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Converter } from 'showdown';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  private converter = new Converter({
    simpleLineBreaks: true,
  });

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.converter.makeHtml(value || ''),
    );
  }
}
