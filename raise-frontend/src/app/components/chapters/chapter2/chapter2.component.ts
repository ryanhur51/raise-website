import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter2.component.html',
  styleUrl: './chapter2.component.css'
})
export class Chapter2Component {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Show visual feedback
      const buttons = document.querySelectorAll('.copy-btn');
      buttons.forEach(button => {
        if (button instanceof HTMLElement) {
          // Reset all buttons
          button.innerHTML = '<span class="copy-icon">📋</span> Copy';
          button.style.backgroundColor = '#3498db';
        }
      });

      // Update the clicked button
      const clickedButton = event?.target as HTMLElement;
      if (clickedButton && clickedButton.classList.contains('copy-btn')) {
        clickedButton.innerHTML = '<span class="copy-icon">✓</span> Copied!';
        clickedButton.style.backgroundColor = '#2ecc71';
        
        // Reset after 2 seconds
        setTimeout(() => {
          clickedButton.innerHTML = '<span class="copy-icon">📋</span> Copy';
          clickedButton.style.backgroundColor = '#3498db';
        }, 2000);
      }
      
      console.log('Text copied to clipboard');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
  
  // Method that returns the space exploration quiz text
  getSpaceExplorationQuizText(): string {
    return 'Create a quiz on the history of space exploration. After each question, recommend resources such as:\n' +
           'After asking about Aryabhata, India\'s first satellite launched in 1975, suggest reading "India\'s Space Odyssey: Aryabhata and Beyond" by [author] or watching the documentary "Aryabhata: A Milestone in India\'s Space Journey" on [platform].\n' +
           'For a question on the Mars Orbiter Mission (Mangalyaan), recommend articles from ISRO\'s official website or videos from educational YouTube channels like ISRO Outreach or National Geographic.';
  }
}