import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { Address, Candidate } from '../register/register.component';

describe('Registration HttpService', () => {

  beforeEach(async() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      HttpService,
      HttpClientTestingModule
    ]})

  );

  it('Register Candiate should register a candidate', () => {
    let mockService = TestBed.get(HttpService);
    const dummyAddress = new Address('1, Central London', 'Sheriffs County',567432,'Near London Eye' );
    const dummyCandidate = new Candidate('shreyas', 29,'O+', false, dummyAddress);
    const service: HttpService = TestBed.get(HttpService);
    spyOn(mockService, 'registerCandidate').and.returnValue('{ok}')
    expect(service.registerCandidate(dummyCandidate)).toMatch('{ok}');


  });
});
