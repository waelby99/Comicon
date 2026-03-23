import { Component } from '@angular/core';
import { LucideAngularModule, Star,MapPin, CalendarDays } from 'lucide-angular';
import { COMIC_CON_NAV_ITEMS } from '../../data/navbar.data';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-comic-con',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './comic-con.component.html',
  styleUrl: './comic-con.component.scss'
})
export class ComicConComponent {
  navItems: NavItem[] = COMIC_CON_NAV_ITEMS;
  readonly starIcon = Star;
  readonly mapPinIcon = MapPin;
  readonly calendarIcon = CalendarDays;
}